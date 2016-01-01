/**
 * Created by dscott on 12/31/2015.
 */

$(function() {
    var operand1;
    var operand2;
    var operator;
    var result;

    var numberText = '';
    var equationArray = [];

    $('button').on('click', function() {
        var buttonValue = $(this).attr('id');
        if (isNaN(parseInt(buttonValue)) == false) {
            numberText += buttonValue;
            $('#screen').html(numberText);
        } else {
            switch(buttonValue) {
                case ".":
                    if (numberText.length === 0) {
                        numberText += "0";
                    }

                    if (numberText.indexOf('.') === -1) {
                        numberText += '.';
                    }
                    break;
                case "ac":
                    operand1 = operand2 = result = undefined;
                    numberText = "";
                    $('#screen').html(numberText);
                    equationArray = [];
                    break;
                case "ce":
                    numberText = "";
                    break;
                case "=":
                    operand2 = parseFloat(numberText);
                    result = performOperation(operator, operand1, operand2);
                    $('#screen').html(result);
                    operand1 = result;
                    break;
                default:
                    if (isNaN(operand1) == false) {
                        operand2 = parseFloat(numberText);
                        result = performOperation(operator, operand1, operand2);
                        $('#screen').html(result);
                        operand1 = result;
                    } else {
                        operand1 = parseFloat(numberText);
                    }
                    numberText = "";
                    operator = buttonValue;
            }
        }
    });
});

function performOperation(opr, opd1, opd2) {
    switch (opr) {
        case 'plus':
            if (isNaN(opd2) == false) {
                result = opd1 + opd2;
            } else {
                result = opd1 + opd1;
            }
            break;
        case '*':
            if (isNaN(opd2) == false) {
                result = opd1 * opd2;
            } else {
                result = opd1 * opd1;
            }
            break;
        case '-':
            if (isNaN(opd2) == false) {
                result = opd1 - opd2;
            } else {
                result = opd1 - opd1;
            }
            break;
        case '/':
            if (isNaN(opd2) == false) {
                result = opd1 / opd2;
            } else {
                result = opd1 / opd1;
            }
            break;
    }

    return result;
}