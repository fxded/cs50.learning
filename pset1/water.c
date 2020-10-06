/* count water */

#include <stdio.h>
#include <cs50.h>

// получаем корректную инфу от пользователя
int get_time(void){

    int change;

    do {
        change = get_float("Please tell me how much time you spent taking a shower: ");
    } while (change <= 0);

    return change;

}

// вычисляет количество потраченной воды в бутылках по 0.5 литра
int waterCounter(int time) {
    return time * 6 * 2;
}

// главная функция
int main (void) {
    int timer;
    timer = get_time();
    printf("You spent: %d bottles of water\n", waterCounter(timer));
}