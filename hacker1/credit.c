/* validations credit card */

#include <stdio.h>
#include <cs50.h>
#include <math.h>


// получаем корректную инфу от пользователя
long long get_number(void){

    long long number;

    do {
        number = get_long_long("Please give me your card number: ");
        //printf("INVALID\n");
    } while (number <= 1000000000);

    return number;

}

//validator function
int validator(long long card_number){

    int digit = 0;
    int result = 0;
    int twice;
    int residue;
    bool odd = true;
    bool flag = true;
    int owner;

    while (card_number) {
        if (card_number < 100 && flag) {
            owner = card_number;
            flag = false;
            //printf("%d, %d |", owner, flag);
        }
        digit = card_number % 10;
        card_number = (card_number - digit) / 10;
        if (odd) {
            result += digit;
            //printf("%d %d %s |", digit, result, odd ? "true" : "false");
        } else {
            twice = digit * 2;
            if ( twice > 9 ) {
                residue = twice % 10;
                result += residue;
                result += (twice - residue) / 10;
            } else {
                result += twice;
            }
            //printf("%d %d %s |", twice, result, odd ? "true" : "false");
        }
        odd = !odd;
    }
    //printf("%d %d\n", owner, result);

    return result % 10 ? 0 : owner;
}

// main section
int main(void){

    //do {
    long long card_number = get_number();
    int card_system = validator(card_number);

    if (card_system >= 40 && card_system < 50 && card_number > 400000000000) {
        printf("VISA\n");

    } else if ((card_system == 34) || (card_system == 37)) {
        printf("AMEX\n");

    } else if ((card_system >= 51) && (card_system <= 55)) {
        printf("MASTERCARD\n");

    } else if (card_system == 0 || card_system) {
        printf("INVALID\n");
    }
    //printf("%d\n", card_system);
    //validator(card_number);
    //} while (true);

    return 0;
}