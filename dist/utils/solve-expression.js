"use strict";
/**
 * @module fxSolve/utils/solve-expression
 */
Object.defineProperty(exports, "__esModule", { value: true });
const is_undefined_variable_error_1 = require("./is-undefined-variable-error");
const clean_expression_1 = require("./clean-expression");
/**
 * Tries to solve a mathematical expression with a MathJs parser.
 * @param {String} expression The expression to solve.
 * @param {Object} parser The MathJs parser.
 * @returns {any} The expression result.
 */
function solveExpression(expression, parser) {
    try {
        const cleaned = clean_expression_1.default(expression);
        const value = parser.evaluate(cleaned);
        const parsed = parseFloat(value);
        if (!isNaN(parsed)) {
            return parsed;
        }
        return value;
    }
    catch (err) {
        if (is_undefined_variable_error_1.default(err)) {
            return;
        }
        throw err;
    }
}
exports.default = solveExpression;
//# sourceMappingURL=solve-expression.js.map