/** @type {import('ts-jest').JestConfigWithTsJest} */

module.exports = {
    preset: 'ts-jest/presets/js-with-ts',
    testEnvironment: 'jsdom',
    // testEnvironment: 'node',
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
        '^@ui/(.*)$': '<rootDir>/src/ui/$1',
        '^@assets/(.*)$': '<rootDir>/src/assets/$1',
        '^@modules/(.*)$': '<rootDir>/src/modules/$1',
        '^@hooks/(.*)$': '<rootDir>/src/hooks/$1',
        '^@components/(.*)$': '<rootDir>/src/components/$1',
        '^@store/(.*)$': '<rootDir>/src/store/$1',
        '^@pages/(.*)$': '<rootDir>/src/pages/$1',
        '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            '<rootDir>/mocks/fileMock.js',
        '\\.(css|less)$': '<rootDir>/mocks/fileMock.js',
        '^uuid$': require.resolve('uuid'),
    },
    transform: {
        '^.+\\.scss$': 'jest-scss-transform',
    },
    setupFilesAfterEnv: ['<rootDir>/src/jest-setup.ts'],
    transformIgnorePatterns: ['<rootDir>/node_modules/'],
}
