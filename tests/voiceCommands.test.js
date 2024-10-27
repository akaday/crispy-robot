const { initializeVoiceCommands, handleVoiceCommand } = require('../src/voiceCommands');

describe('Voice Commands', () => {
    let recognitionMock;

    beforeEach(() => {
        recognitionMock = {
            start: jest.fn(),
            onresult: jest.fn(),
        };
        global.SpeechRecognition = jest.fn(() => recognitionMock);
        global.webkitSpeechRecognition = jest.fn(() => recognitionMock);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('should initialize voice commands successfully', () => {
        initializeVoiceCommands(handleVoiceCommand);
        expect(recognitionMock.start).toHaveBeenCalled();
    });

    test('should handle unsupported speech recognition API', () => {
        delete global.SpeechRecognition;
        delete global.webkitSpeechRecognition;

        const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
        const displayVoiceCommandErrorMock = jest.fn();
        global.displayVoiceCommandError = displayVoiceCommandErrorMock;

        initializeVoiceCommands(handleVoiceCommand);

        expect(consoleErrorSpy).toHaveBeenCalledWith("Speech recognition API not supported in this browser.");
        expect(displayVoiceCommandErrorMock).toHaveBeenCalledWith("Speech recognition API not supported in this browser.");
    });

    test('should handle voice command and add item to cart', () => {
        const addItemToCartMock = jest.fn();
        global.addItemToCart = addItemToCartMock;

        const command = 'add apple';
        handleVoiceCommand(command);

        expect(addItemToCartMock).toHaveBeenCalledWith('apple');
    });

    test('should handle unsupported speech recognition API in handleVoiceCommand', () => {
        delete global.SpeechRecognition;
        delete global.webkitSpeechRecognition;

        const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
        const displayVoiceCommandErrorMock = jest.fn();
        global.displayVoiceCommandError = displayVoiceCommandErrorMock;

        const command = 'add apple';
        handleVoiceCommand(command);

        expect(consoleErrorSpy).toHaveBeenCalledWith("Speech recognition API not supported in this browser.");
        expect(displayVoiceCommandErrorMock).toHaveBeenCalledWith("Speech recognition API not supported in this browser.");
    });
});
