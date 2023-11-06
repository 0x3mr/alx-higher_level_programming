#ifndef LISTS_H
#define LISTS_H

#include <stdio.h>
#include <stdlib.h>

/**
 * struct listint_s - singly linked list
 *
 * @n: integer
 * @next: next node pointer
 *
 * Description: structure of singly linked list node
*/
typedef struct listint_s
{
	int n;
	struct listint_s *next;
} listint_t;

int check_pal(listint_t **head, listint_t *last);
int is_palindrome(listint_t **head);

#endif
