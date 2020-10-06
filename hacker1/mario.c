/* mario pyramid */

#include <stdio.h>
#include <cs50.h>

int main (void) {

    int height;
    int center;
    int abyss = 2;

    do {
        height = get_int("Please input height of Mario's pyramid: ");
    } while ((height < 1) || (height > 8));

    center = height + 1;

    for (int i = 1; i <= height; i++) {

        for (int y = 1, z = height * 2 + abyss; y <= z; y++) {
            if ((y > height && y < center + abyss) || (y < center - i) || (y > height + i + abyss)) {
                printf(" ");
            } else {
                printf("#");
            }
        }

        printf("\n");
    }
}