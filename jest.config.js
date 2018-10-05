module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  reporters: [
    'default',
    [
      'jest-html-reporter', {
        outputPath: 'www/jest.html',
      },
    ]
  ],
  roots: ['test'],
};
