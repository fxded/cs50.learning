/* mario pyramid */

#include <stdio.h>
#include <cs50.h>

int main (void) {

    int height;

    do {
        height = get_int("Please input height of Mario's pyramid: ");
    } while ((height < 1) || (height > 8));

    for (int i = 1; i <= height; i++) {
        for (int y = 1; y <= height - i; y++) {
            printf(" ");
        }
        for (int z = 1; z <= i; z++) {
            printf("#");
        }
        printf("\n");
    }
}