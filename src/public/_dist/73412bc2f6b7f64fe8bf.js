"use strict";
(self["webpackChunkfluex_gl_test_application"] = self["webpackChunkfluex_gl_test_application"] || []).push([[9],{

/***/ 60:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


exports.isSaturday = isSaturday;
var _index = __webpack_require__(57);

/**
 * The {@link isSaturday} function options.
 */

/**
 * @name isSaturday
 * @category Weekday Helpers
 * @summary Is the given date Saturday?
 *
 * @description
 * Is the given date Saturday?
 *
 * @param date - The date to check
 * @param options - An object with options
 *
 * @returns The date is Saturday
 *
 * @example
 * // Is 27 September 2014 Saturday?
 * const result = isSaturday(new Date(2014, 8, 27))
 * //=> true
 */
function isSaturday(date, options) {
  return (0, _index.toDate)(date, options?.in).getDay() === 6;
}


/***/ }),

/***/ 61:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


exports.isSunday = isSunday;
var _index = __webpack_require__(57);

/**
 * The {@link isSunday} function options.
 */

/**
 * @name isSunday
 * @category Weekday Helpers
 * @summary Is the given date Sunday?
 *
 * @description
 * Is the given date Sunday?
 *
 * @param date - The date to check
 * @param options - The options object
 *
 * @returns The date is Sunday
 *
 * @example
 * // Is 21 September 2014 Sunday?
 * const result = isSunday(new Date(2014, 8, 21))
 * //=> true
 */
function isSunday(date, options) {
  return (0, _index.toDate)(date, options?.in).getDay() === 0;
}


/***/ }),

/***/ 62:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


exports.isWeekend = isWeekend;
var _index = __webpack_require__(57);

/**
 * The {@link isWeekend} function options.
 */

/**
 * @name isWeekend
 * @category Weekday Helpers
 * @summary Does the given date fall on a weekend?
 *
 * @description
 * Does the given date fall on a weekend? A weekend is either Saturday (`6`) or Sunday (`0`).
 *
 * @param date - The date to check
 * @param options - An object with options
 *
 * @returns The date falls on a weekend
 *
 * @example
 * // Does 5 October 2014 fall on a weekend?
 * const result = isWeekend(new Date(2014, 9, 5))
 * //=> true
 */
function isWeekend(date, options) {
  const day = (0, _index.toDate)(date, options?.in).getDay();
  return day === 0 || day === 6;
}


/***/ }),

/***/ 92:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


exports.isSameDay = isSameDay;
var _index = __webpack_require__(73);
var _index2 = __webpack_require__(74);

/**
 * The {@link isSameDay} function options.
 */

/**
 * @name isSameDay
 * @category Day Helpers
 * @summary Are the given dates in the same day (and year and month)?
 *
 * @description
 * Are the given dates in the same day (and year and month)?
 *
 * @param laterDate - The first date to check
 * @param earlierDate - The second date to check
 * @param options - An object with options
 *
 * @returns The dates are in the same day (and year and month)
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
 * //=> true
 *
 * @example
 * // Are 4 September and 4 October in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2014, 9, 4))
 * //=> false
 *
 * @example
 * // Are 4 September, 2014 and 4 September, 2015 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2015, 8, 4))
 * //=> false
 */
function isSameDay(laterDate, earlierDate, options) {
  const [dateLeft_, dateRight_] = (0, _index.normalizeDates)(
    options?.in,
    laterDate,
    earlierDate,
  );
  return (
    +(0, _index2.startOfDay)(dateLeft_) === +(0, _index2.startOfDay)(dateRight_)
  );
}


/***/ }),

/***/ 93:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


exports.isValid = isValid;
var _index = __webpack_require__(94);
var _index2 = __webpack_require__(57);

/**
 * @name isValid
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Argument is converted to Date using `toDate`. See [toDate](https://date-fns.org/docs/toDate)
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * @param date - The date to check
 *
 * @returns The date is valid
 *
 * @example
 * // For the valid date:
 * const result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the value, convertible into a date:
 * const result = isValid(1393804800000)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * const result = isValid(new Date(''))
 * //=> false
 */
function isValid(date) {
  return !(
    (!(0, _index.isDate)(date) && typeof date !== "number") ||
    isNaN(+(0, _index2.toDate)(date))
  );
}


/***/ }),

/***/ 256:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


exports.isPast = isPast;
var _index = __webpack_require__(57);

/**
 * @name isPast
 * @category Common Helpers
 * @summary Is the given date in the past?
 * @pure false
 *
 * @description
 * Is the given date in the past?
 *
 * @param date - The date to check
 *
 * @returns The date is in the past
 *
 * @example
 * // If today is 6 October 2014, is 2 July 2014 in the past?
 * const result = isPast(new Date(2014, 6, 2))
 * //=> true
 */
function isPast(date) {
  return +(0, _index.toDate)(date) < Date.now();
}


/***/ }),

/***/ 257:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


exports.isSameHour = isSameHour;
var _index = __webpack_require__(73);
var _index2 = __webpack_require__(258);

/**
 * The {@link isSameHour} function options.
 */

/**
 * @name isSameHour
 * @category Hour Helpers
 * @summary Are the given dates in the same hour (and same day)?
 *
 * @description
 * Are the given dates in the same hour (and same day)?
 *
 * @param dateLeft - The first date to check
 * @param dateRight - The second date to check
 * @param options - An object with options
 *
 * @returns The dates are in the same hour (and same day)
 *
 * @example
 * // Are 4 September 2014 06:00:00 and 4 September 06:30:00 in the same hour?
 * const result = isSameHour(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 6, 30))
 * //=> true
 *
 * @example
 * // Are 4 September 2014 06:00:00 and 5 September 06:00:00 in the same hour?
 * const result = isSameHour(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 5, 6, 0))
 * //=> false
 */
function isSameHour(dateLeft, dateRight, options) {
  const [dateLeft_, dateRight_] = (0, _index.normalizeDates)(
    options?.in,
    dateLeft,
    dateRight,
  );
  return (
    +(0, _index2.startOfHour)(dateLeft_) ===
    +(0, _index2.startOfHour)(dateRight_)
  );
}


/***/ }),

/***/ 259:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


exports.isSameISOWeek = isSameISOWeek;
var _index = __webpack_require__(260);

/**
 * The {@link isSameISOWeek} function options.
 */

/**
 * @name isSameISOWeek
 * @category ISO Week Helpers
 * @summary Are the given dates in the same ISO week (and year)?
 *
 * @description
 * Are the given dates in the same ISO week (and year)?
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param laterDate - The first date to check
 * @param earlierDate - The second date to check
 * @param options - An object with options
 *
 * @returns The dates are in the same ISO week (and year)
 *
 * @example
 * // Are 1 September 2014 and 7 September 2014 in the same ISO week?
 * const result = isSameISOWeek(new Date(2014, 8, 1), new Date(2014, 8, 7))
 * //=> true
 *
 * @example
 * // Are 1 September 2014 and 1 September 2015 in the same ISO week?
 * const result = isSameISOWeek(new Date(2014, 8, 1), new Date(2015, 8, 1))
 * //=> false
 */
function isSameISOWeek(laterDate, earlierDate, options) {
  return (0, _index.isSameWeek)(laterDate, earlierDate, {
    ...options,
    weekStartsOn: 1,
  });
}


/***/ }),

/***/ 260:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


exports.isSameWeek = isSameWeek;
var _index = __webpack_require__(73);
var _index2 = __webpack_require__(68);

/**
 * The {@link isSameWeek} function options.
 */

/**
 * @name isSameWeek
 * @category Week Helpers
 * @summary Are the given dates in the same week (and month and year)?
 *
 * @description
 * Are the given dates in the same week (and month and year)?
 *
 * @param laterDate - The first date to check
 * @param earlierDate - The second date to check
 * @param options - An object with options
 *
 * @returns The dates are in the same week (and month and year)
 *
 * @example
 * // Are 31 August 2014 and 4 September 2014 in the same week?
 * const result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4))
 * //=> true
 *
 * @example
 * // If week starts with Monday,
 * // are 31 August 2014 and 4 September 2014 in the same week?
 * const result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4), {
 *   weekStartsOn: 1
 * })
 * //=> false
 *
 * @example
 * // Are 1 January 2014 and 1 January 2015 in the same week?
 * const result = isSameWeek(new Date(2014, 0, 1), new Date(2015, 0, 1))
 * //=> false
 */
function isSameWeek(laterDate, earlierDate, options) {
  const [laterDate_, earlierDate_] = (0, _index.normalizeDates)(
    options?.in,
    laterDate,
    earlierDate,
  );
  return (
    +(0, _index2.startOfWeek)(laterDate_, options) ===
    +(0, _index2.startOfWeek)(earlierDate_, options)
  );
}


/***/ }),

/***/ 261:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


exports.isSameISOWeekYear = isSameISOWeekYear;
var _index = __webpack_require__(75);

var _index2 = __webpack_require__(73);

/**
 * The {@link isSameISOWeekYear} function options.
 */

/**
 * @name isSameISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Are the given dates in the same ISO week-numbering year?
 *
 * @description
 * Are the given dates in the same ISO week-numbering year?
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param laterDate - The first date to check
 * @param earlierDate - The second date to check
 * @param options - An object with options
 *
 * @returns The dates are in the same ISO week-numbering year
 *
 * @example
 * // Are 29 December 2003 and 2 January 2005 in the same ISO week-numbering year?
 * const result = isSameISOWeekYear(new Date(2003, 11, 29), new Date(2005, 0, 2))
 * //=> true
 */
function isSameISOWeekYear(laterDate, earlierDate, options) {
  const [laterDate_, earlierDate_] = (0, _index2.normalizeDates)(
    options?.in,
    laterDate,
    earlierDate,
  );
  return (
    +(0, _index.startOfISOWeekYear)(laterDate_) ===
    +(0, _index.startOfISOWeekYear)(earlierDate_)
  );
}


/***/ }),

/***/ 262:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


exports.isSameMinute = isSameMinute;
var _index = __webpack_require__(263);

/**
 * @name isSameMinute
 * @category Minute Helpers
 * @summary Are the given dates in the same minute (and hour and day)?
 *
 * @description
 * Are the given dates in the same minute (and hour and day)?
 *
 * @param laterDate - The first date to check
 * @param earlierDate - The second date to check
 *
 * @returns The dates are in the same minute (and hour and day)
 *
 * @example
 * // Are 4 September 2014 06:30:00 and 4 September 2014 06:30:15 in the same minute?
 * const result = isSameMinute(
 *   new Date(2014, 8, 4, 6, 30),
 *   new Date(2014, 8, 4, 6, 30, 15)
 * )
 * //=> true
 *
 * @example
 * // Are 4 September 2014 06:30:00 and 5 September 2014 06:30:00 in the same minute?
 * const result = isSameMinute(
 *   new Date(2014, 8, 4, 6, 30),
 *   new Date(2014, 8, 5, 6, 30)
 * )
 * //=> false
 */
function isSameMinute(laterDate, earlierDate) {
  return (
    +(0, _index.startOfMinute)(laterDate) ===
    +(0, _index.startOfMinute)(earlierDate)
  );
}


/***/ }),

/***/ 264:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


exports.isSameMonth = isSameMonth;
var _index = __webpack_require__(73);

/**
 * The {@link isSameMonth} function options.
 */

/**
 * @name isSameMonth
 * @category Month Helpers
 * @summary Are the given dates in the same month (and year)?
 *
 * @description
 * Are the given dates in the same month (and year)?
 *
 * @param laterDate - The first date to check
 * @param earlierDate - The second date to check
 * @param options - An object with options
 *
 * @returns The dates are in the same month (and year)
 *
 * @example
 * // Are 2 September 2014 and 25 September 2014 in the same month?
 * const result = isSameMonth(new Date(2014, 8, 2), new Date(2014, 8, 25))
 * //=> true
 *
 * @example
 * // Are 2 September 2014 and 25 September 2015 in the same month?
 * const result = isSameMonth(new Date(2014, 8, 2), new Date(2015, 8, 25))
 * //=> false
 */
function isSameMonth(laterDate, earlierDate, options) {
  const [laterDate_, earlierDate_] = (0, _index.normalizeDates)(
    options?.in,
    laterDate,
    earlierDate,
  );
  return (
    laterDate_.getFullYear() === earlierDate_.getFullYear() &&
    laterDate_.getMonth() === earlierDate_.getMonth()
  );
}


/***/ }),

/***/ 265:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


exports.isSameQuarter = isSameQuarter;
var _index = __webpack_require__(73);
var _index2 = __webpack_require__(123);

/**
 * The {@link isSameQuarter} function options.
 */

/**
 * @name isSameQuarter
 * @category Quarter Helpers
 * @summary Are the given dates in the same quarter (and year)?
 *
 * @description
 * Are the given dates in the same quarter (and year)?
 *
 * @param laterDate - The first date to check
 * @param earlierDate - The second date to check
 * @param options - An object with options
 *
 * @returns The dates are in the same quarter (and year)
 *
 * @example
 * // Are 1 January 2014 and 8 March 2014 in the same quarter?
 * const result = isSameQuarter(new Date(2014, 0, 1), new Date(2014, 2, 8))
 * //=> true
 *
 * @example
 * // Are 1 January 2014 and 1 January 2015 in the same quarter?
 * const result = isSameQuarter(new Date(2014, 0, 1), new Date(2015, 0, 1))
 * //=> false
 */
function isSameQuarter(laterDate, earlierDate, options) {
  const [dateLeft_, dateRight_] = (0, _index.normalizeDates)(
    options?.in,
    laterDate,
    earlierDate,
  );
  return (
    +(0, _index2.startOfQuarter)(dateLeft_) ===
    +(0, _index2.startOfQuarter)(dateRight_)
  );
}


/***/ }),

/***/ 266:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


exports.isSameSecond = isSameSecond;
var _index = __webpack_require__(267);

/**
 * @name isSameSecond
 * @category Second Helpers
 * @summary Are the given dates in the same second (and hour and day)?
 *
 * @description
 * Are the given dates in the same second (and hour and day)?
 *
 * @param laterDate - The first date to check
 * @param earlierDate - The second date to check
 *
 * @returns The dates are in the same second (and hour and day)
 *
 * @example
 * // Are 4 September 2014 06:30:15.000 and 4 September 2014 06:30.15.500 in the same second?
 * const result = isSameSecond(
 *   new Date(2014, 8, 4, 6, 30, 15),
 *   new Date(2014, 8, 4, 6, 30, 15, 500)
 * )
 * //=> true
 *
 * @example
 * // Are 4 September 2014 06:00:15.000 and 4 September 2014 06:01.15.000 in the same second?
 * const result = isSameSecond(
 *   new Date(2014, 8, 4, 6, 0, 15),
 *   new Date(2014, 8, 4, 6, 1, 15)
 * )
 * //=> false
 *
 * @example
 * // Are 4 September 2014 06:00:15.000 and 5 September 2014 06:00.15.000 in the same second?
 * const result = isSameSecond(
 *   new Date(2014, 8, 4, 6, 0, 15),
 *   new Date(2014, 8, 5, 6, 0, 15)
 * )
 * //=> false
 */
function isSameSecond(laterDate, earlierDate) {
  return (
    +(0, _index.startOfSecond)(laterDate) ===
    +(0, _index.startOfSecond)(earlierDate)
  );
}


/***/ }),

/***/ 268:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


exports.isSameYear = isSameYear;
var _index = __webpack_require__(73);

/**
 * The {@link isSameYear} function options.
 */

/**
 * @name isSameYear
 * @category Year Helpers
 * @summary Are the given dates in the same year?
 *
 * @description
 * Are the given dates in the same year?
 *
 * @param laterDate - The first date to check
 * @param earlierDate - The second date to check
 * @param options - An object with options
 *
 * @returns The dates are in the same year
 *
 * @example
 * // Are 2 September 2014 and 25 September 2014 in the same year?
 * const result = isSameYear(new Date(2014, 8, 2), new Date(2014, 8, 25))
 * //=> true
 */
function isSameYear(laterDate, earlierDate, options) {
  const [laterDate_, earlierDate_] = (0, _index.normalizeDates)(
    options?.in,
    laterDate,
    earlierDate,
  );
  return laterDate_.getFullYear() === earlierDate_.getFullYear();
}


/***/ }),

/***/ 269:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


exports.isThisHour = isThisHour;
var _index = __webpack_require__(89);
var _index2 = __webpack_require__(257);
var _index3 = __webpack_require__(57);

/**
 * The {@link isThisHour} function options.
 */

/**
 * @name isThisHour
 * @category Hour Helpers
 * @summary Is the given date in the same hour as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same hour as the current date?
 *
 * @param date - The date to check
 * @param options - An object with options
 *
 * @returns The date is in this hour
 *
 * @example
 * // If now is 25 September 2014 18:30:15.500,
 * // is 25 September 2014 18:00:00 in this hour?
 * const result = isThisHour(new Date(2014, 8, 25, 18))
 * //=> true
 */
function isThisHour(date, options) {
  return (0, _index2.isSameHour)(
    (0, _index3.toDate)(date, options?.in),
    (0, _index.constructNow)(options?.in || date),
  );
}


/***/ }),

/***/ 270:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


exports.isThisISOWeek = isThisISOWeek;
var _index = __webpack_require__(55);
var _index2 = __webpack_require__(89);
var _index3 = __webpack_require__(259);

/**
 * The {@link isThisISOWeek} function options.
 */

/**
 * @name isThisISOWeek
 * @category ISO Week Helpers
 * @summary Is the given date in the same ISO week as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same ISO week as the current date?
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param date - The date to check
 * @param options - An object with options
 *
 * @returns The date is in this ISO week
 *
 * @example
 * // If today is 25 September 2014, is 22 September 2014 in this ISO week?
 * const result = isThisISOWeek(new Date(2014, 8, 22))
 * //=> true
 */
function isThisISOWeek(date, options) {
  return (0, _index3.isSameISOWeek)(
    (0, _index.constructFrom)(options?.in || date, date),
    (0, _index2.constructNow)(options?.in || date),
  );
}


/***/ }),

/***/ 271:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


exports.isThisMinute = isThisMinute;
var _index = __webpack_require__(89);
var _index2 = __webpack_require__(262);

/**
 * @name isThisMinute
 * @category Minute Helpers
 * @summary Is the given date in the same minute as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same minute as the current date?
 *
 * @param date - The date to check
 *
 * @returns The date is in this minute
 *
 * @example
 * // If now is 25 September 2014 18:30:15.500,
 * // is 25 September 2014 18:30:00 in this minute?
 * const result = isThisMinute(new Date(2014, 8, 25, 18, 30))
 * //=> true
 */

function isThisMinute(date) {
  return (0, _index2.isSameMinute)(date, (0, _index.constructNow)(date));
}


/***/ }),

/***/ 272:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


exports.isThisMonth = isThisMonth;
var _index = __webpack_require__(55);
var _index2 = __webpack_require__(89);
var _index3 = __webpack_require__(264);

/**
 * The {@link isThisMonth} function options.
 */

/**
 * @name isThisMonth
 * @category Month Helpers
 * @summary Is the given date in the same month as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same month as the current date?
 *
 * @param date - The date to check
 * @param options - An object with options
 *
 * @returns The date is in this month
 *
 * @example
 * // If today is 25 September 2014, is 15 September 2014 in this month?
 * const result = isThisMonth(new Date(2014, 8, 15))
 * //=> true
 */
function isThisMonth(date, options) {
  return (0, _index3.isSameMonth)(
    (0, _index.constructFrom)(options?.in || date, date),
    (0, _index2.constructNow)(options?.in || date),
  );
}


/***/ }),

/***/ 273:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


exports.isThisQuarter = isThisQuarter;
var _index = __webpack_require__(55);
var _index2 = __webpack_require__(89);
var _index3 = __webpack_require__(265);

/**
 * The {@link isThisQuarter} function options.
 */

/**
 * @name isThisQuarter
 * @category Quarter Helpers
 * @summary Is the given date in the same quarter as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same quarter as the current date?
 *
 * @param date - The date to check
 * @param options - An object with options
 *
 * @returns The date is in this quarter
 *
 * @example
 * // If today is 25 September 2014, is 2 July 2014 in this quarter?
 * const result = isThisQuarter(new Date(2014, 6, 2))
 * //=> true
 */
function isThisQuarter(date, options) {
  return (0, _index3.isSameQuarter)(
    (0, _index.constructFrom)(options?.in || date, date),
    (0, _index2.constructNow)(options?.in || date),
  );
}


/***/ }),

/***/ 274:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


exports.isThisSecond = isThisSecond;
var _index = __webpack_require__(89);
var _index2 = __webpack_require__(266);

/**
 * @name isThisSecond
 * @category Second Helpers
 * @summary Is the given date in the same second as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same second as the current date?
 *
 * @param date - The date to check
 *
 * @returns The date is in this second
 *
 * @example
 * // If now is 25 September 2014 18:30:15.500,
 * // is 25 September 2014 18:30:15.000 in this second?
 * const result = isThisSecond(new Date(2014, 8, 25, 18, 30, 15))
 * //=> true
 */
function isThisSecond(date) {
  return (0, _index2.isSameSecond)(date, (0, _index.constructNow)(date));
}


/***/ }),

/***/ 275:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


exports.isThisWeek = isThisWeek;
var _index = __webpack_require__(55);
var _index2 = __webpack_require__(89);
var _index3 = __webpack_require__(260);

/**
 * The {@link isThisWeek} function options.
 */

/**
 * @name isThisWeek
 * @category Week Helpers
 * @summary Is the given date in the same week as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same week as the current date?
 *
 * @param date - The date to check
 * @param options - The object with options
 *
 * @returns The date is in this week
 *
 * @example
 * // If today is 25 September 2014, is 21 September 2014 in this week?
 * const result = isThisWeek(new Date(2014, 8, 21))
 * //=> true
 *
 * @example
 * // If today is 25 September 2014 and week starts with Monday
 * // is 21 September 2014 in this week?
 * const result = isThisWeek(new Date(2014, 8, 21), { weekStartsOn: 1 })
 * //=> false
 */
function isThisWeek(date, options) {
  return (0, _index3.isSameWeek)(
    (0, _index.constructFrom)(options?.in || date, date),
    (0, _index2.constructNow)(options?.in || date),
    options,
  );
}


/***/ }),

/***/ 276:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


exports.isThisYear = isThisYear;
var _index = __webpack_require__(55);
var _index2 = __webpack_require__(89);
var _index3 = __webpack_require__(268);

/**
 * The {@link isThisYear} function options.
 */

/**
 * @name isThisYear
 * @category Year Helpers
 * @summary Is the given date in the same year as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same year as the current date?
 *
 * @param date - The date to check
 * @param options - An object with options
 *
 * @returns The date is in this year
 *
 * @example
 * // If today is 25 September 2014, is 2 July 2014 in this year?
 * const result = isThisYear(new Date(2014, 6, 2))
 * //=> true
 */
function isThisYear(date, options) {
  return (0, _index3.isSameYear)(
    (0, _index.constructFrom)(options?.in || date, date),
    (0, _index2.constructNow)(options?.in || date),
  );
}


/***/ }),

/***/ 277:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


exports.isThursday = isThursday;
var _index = __webpack_require__(57);

/**
 * The {@link isThursday} function options.
 */

/**
 * @name isThursday
 * @category Weekday Helpers
 * @summary Is the given date Thursday?
 *
 * @description
 * Is the given date Thursday?
 *
 * @param date - The date to check
 * @param options - An object with options
 *
 * @returns The date is Thursday
 *
 * @example
 * // Is 25 September 2014 Thursday?
 * const result = isThursday(new Date(2014, 8, 25))
 * //=> true
 */
function isThursday(date, options) {
  return (0, _index.toDate)(date, options?.in).getDay() === 4;
}


/***/ }),

/***/ 278:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


exports.isToday = isToday;
var _index = __webpack_require__(55);
var _index2 = __webpack_require__(89);
var _index3 = __webpack_require__(92);

/**
 * The {@link isToday} function options.
 */

/**
 * @name isToday
 * @category Day Helpers
 * @summary Is the given date today?
 * @pure false
 *
 * @description
 * Is the given date today?
 *
 * @param date - The date to check
 * @param options - An object with options
 *
 * @returns The date is today
 *
 * @example
 * // If today is 6 October 2014, is 6 October 14:00:00 today?
 * const result = isToday(new Date(2014, 9, 6, 14, 0))
 * //=> true
 */
function isToday(date, options) {
  return (0, _index3.isSameDay)(
    (0, _index.constructFrom)(options?.in || date, date),
    (0, _index2.constructNow)(options?.in || date),
  );
}


/***/ }),

/***/ 279:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


exports.isTomorrow = isTomorrow;
var _index = __webpack_require__(54);
var _index2 = __webpack_require__(89);
var _index3 = __webpack_require__(92);

/**
 * The {@link isTomorrow} function options.
 */

/**
 * @name isTomorrow
 * @category Day Helpers
 * @summary Is the given date tomorrow?
 * @pure false
 *
 * @description
 * Is the given date tomorrow?
 *
 * @param date - The date to check
 * @param options - An object with options
 *
 * @returns The date is tomorrow
 *
 * @example
 * // If today is 6 October 2014, is 7 October 14:00:00 tomorrow?
 * const result = isTomorrow(new Date(2014, 9, 7, 14, 0))
 * //=> true
 */
function isTomorrow(date, options) {
  return (0, _index3.isSameDay)(
    date,
    (0, _index.addDays)((0, _index2.constructNow)(options?.in || date), 1),
    options,
  );
}


/***/ }),

/***/ 280:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


exports.isTuesday = isTuesday;
var _index = __webpack_require__(57);

/**
 * The {@link isTuesday} function options.
 */

/**
 * @name isTuesday
 * @category Weekday Helpers
 * @summary Is the given date Tuesday?
 *
 * @description
 * Is the given date Tuesday?
 *
 * @param date - The date to check
 * @param options - An object with options
 *
 * @returns The date is Tuesday
 *
 * @example
 * // Is 23 September 2014 Tuesday?
 * const result = isTuesday(new Date(2014, 8, 23))
 * //=> true
 */
function isTuesday(date, options) {
  return (0, _index.toDate)(date, options?.in).getDay() === 2;
}


/***/ }),

/***/ 281:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


exports.isWednesday = isWednesday;
var _index = __webpack_require__(57);

/**
 * The {@link isWednesday} function options.
 */

/**
 * @name isWednesday
 * @category Weekday Helpers
 * @summary Is the given date Wednesday?
 *
 * @description
 * Is the given date Wednesday?
 *
 * @param date - The date to check
 * @param options - An object with options
 *
 * @returns The date is Wednesday
 *
 * @example
 * // Is 24 September 2014 Wednesday?
 * const result = isWednesday(new Date(2014, 8, 24))
 * //=> true
 */
function isWednesday(date, options) {
  return (0, _index.toDate)(date, options?.in).getDay() === 3;
}


/***/ }),

/***/ 282:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


exports.isWithinInterval = isWithinInterval;
var _index = __webpack_require__(57);

/**
 * The {@link isWithinInterval} function options.
 */

/**
 * @name isWithinInterval
 * @category Interval Helpers
 * @summary Is the given date within the interval?
 *
 * @description
 * Is the given date within the interval? (Including start and end.)
 *
 * @param date - The date to check
 * @param interval - The interval to check
 * @param options - An object with options
 *
 * @returns The date is within the interval
 *
 * @example
 * // For the date within the interval:
 * isWithinInterval(new Date(2014, 0, 3), {
 *   start: new Date(2014, 0, 1),
 *   end: new Date(2014, 0, 7)
 * })
 * // => true
 *
 * @example
 * // For the date outside of the interval:
 * isWithinInterval(new Date(2014, 0, 10), {
 *   start: new Date(2014, 0, 1),
 *   end: new Date(2014, 0, 7)
 * })
 * // => false
 *
 * @example
 * // For date equal to the interval start:
 * isWithinInterval(date, { start, end: date })
 * // => true
 *
 * @example
 * // For date equal to the interval end:
 * isWithinInterval(date, { start: date, end })
 * // => true
 */
function isWithinInterval(date, interval, options) {
  const time = +(0, _index.toDate)(date, options?.in);
  const [startTime, endTime] = [
    +(0, _index.toDate)(interval.start, options?.in),
    +(0, _index.toDate)(interval.end, options?.in),
  ].sort((a, b) => a - b);

  return time >= startTime && time <= endTime;
}


/***/ }),

/***/ 283:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


exports.isYesterday = isYesterday;
var _index = __webpack_require__(55);
var _index2 = __webpack_require__(89);
var _index3 = __webpack_require__(92);
var _index4 = __webpack_require__(284);

/**
 * The {@link isYesterday} function options.
 */

/**
 * @name isYesterday
 * @category Day Helpers
 * @summary Is the given date yesterday?
 * @pure false
 *
 * @description
 * Is the given date yesterday?
 *
 * @param date - The date to check
 * @param options - An object with options
 *
 * @returns The date is yesterday
 *
 * @example
 * // If today is 6 October 2014, is 5 October 14:00:00 yesterday?
 * const result = isYesterday(new Date(2014, 9, 5, 14, 0))
 * //=> true
 */
function isYesterday(date, options) {
  return (0, _index3.isSameDay)(
    (0, _index.constructFrom)(options?.in || date, date),
    (0, _index4.subDays)((0, _index2.constructNow)(options?.in || date), 1),
  );
}


/***/ })

}]);