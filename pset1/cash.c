/* demonstrate greedy algorithm */

#include <stdio.h>
#include <cs50.h>
#include <math.h>


// получаем корректную инфу от пользователя
float get_change(void){

    float change;

    do {
        change = get_float("Please tell me how many change I will need to give you: ");
    } while (change <= 0);

    return change;

}


// преобразуем в целое число
int cents_of_change(float change){

    //printf("%f\n", roundf(change * 100));
    return (int) roundf (change * 100);

}

// делим сдачу на номинал
int divide_change(int change, int nominal){
    return (change-change%nominal)/nominal;
}

// главная функция
int main(void){

    int change = cents_of_change(get_change());
    int result = 0;
    int coins[] = {25, 10, 5};

    for (int i = 0, j = sizeof(coins) / sizeof(coins[0]) ; i < j; i++) {
        result += divide_change(change, coins[i]);
        change %= coins[i];
    }
    result += change;

    printf("%d\n", result);

}