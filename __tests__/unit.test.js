// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('Testing for valid phone #', () => {
    expect(functions.isPhoneNumber("(619)265-6011")).toBe(true);
});

test('Testing for valid phone #', () => {
    expect(functions.isPhoneNumber("(619)215-4200 ")).toBe(true);
});

test('Testing for invalid phone #', () => {
    expect(functions.isPhoneNumber(12345678)).toBe(false);
});

test('Checking for invalid syntax', () => {
    expect(functions.isPhoneNumber("12345@$#")).toBe(false);
});

test('Testing for valid email', () => {
    expect(functions.isEmail("firstlast@gmail.com")).toBe(true);
});

test('Testing for valid school email', () => {
    expect(functions.isEmail("someone@ucsd.edu")).toBe(true);
});

test('Testing for invalid email', () => {
    expect(functions.isEmail("ucsd#@edu.edu")).toBe(false);
});

test('Testing for invalid email', () => {
    expect(functions.isEmail("ucsd@.edu")).toBe(false);
});

test('Checking for strong password', () => {
    expect(functions.isStrongPassword("asdfjkl10393")).toBe(true);
});

test('Checking for strong password', () => {
    expect(functions.isStrongPassword("ABLE02see2V")).toBe(true);
});

test('Checking for a weak password', () => {
    expect(functions.isStrongPassword("12345")).toBe(false);
});

test('Checking for a weak password', () => {
    expect(functions.isStrongPassword("1s#")).toBe(false);
});

test('Checking for proper date', () => {
    expect(functions.isDate("12/25/2022")).toBe(true);
});

test('Checking for New Years date', () => {
    expect(functions.isDate("01/01/2023")).toBe(true);
});

test('Checking for invalid date', () => {
    expect(functions.isDate("01/A9/A3")).toBe(false);
});

test('Checking for invalid date format', () => {
    expect(functions.isDate("123/456/789")).toBe(false);
});

test('Checking for valid hex color', () => {
    expect(functions.isHexColor("#123456")).toBe(true);
});

test('Checking for valid hex color', () => {
    expect(functions.isHexColor("#7b5c62")).toBe(true);
});

test('Checking for invalid hex color', () => {
    expect(functions.isHexColor("#AAAAA661QXr")).toBe(false);
});

test('Checking for invalid hex color', () => {
    expect(functions.isHexColor("#$@!")).toBe(false);
});