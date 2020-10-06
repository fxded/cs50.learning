/*  the second programm on C */
#include <stdio.h>

// возведение в квадрат
int sqr(int x) {
    return x * x;
}

// выводит приветствие
void sayHello(void){
    printf("Hello everyone\n");
}

// главная функция
int main (void) {
    sayHello();
    printf("%d\n", sqr(5));
}