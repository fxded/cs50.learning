/* demonstrate greedy algorithm */

#include <stdio.h>
#include <cs50.h>


// получаем корректную инфу от пользователя
float get_change(void){

    float change;

    do {
        change = get_float("Please tell me how many change I will need to give you: ");
    } while (change <= 0);

    return change;

}


// преобразуем в целое число
int cents_of_change(float change) {

    return (int)(change * 100);

}

// отсчитываем монеты и уменьшаем сумму оставшейся сдачи
int count_change(int change) {

    if (change >= 25)
        change -= 25;
    else if (change >= 10)
        change -= 10;
    else if (change >= 5)
        change -= 5;
    else if (change >= 1)
        change -= 1;

    return change;
}


// главная функция
int main (void) {

    int change = cents_of_change(get_change());
    int result = 0;

    for (int i = change; i > 0;) {
        i = count_change(i);
        result++;
    }
    printf("%d\n", result);

}