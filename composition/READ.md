# Composition !

Le but est d'écrire une série de fonctions qui vont permettre une implémentation simplifiée d'une fonction finale

On appelle composition de fonction le procédé qui vise à créer une fonction à partir de plusieurs autres fonctions.

Soient **function1** et **function2** prenant un argument _arg_. On peut définir et composer une fonction **function3** de la façon suivante:

**function3**(_arg_) = **function2**(**function1**(_arg_))

## 1 - Racines carrées 

La première fonction à implémenter se nomme **array_sqrt**. Son but est de prendre un tableau en argument
et renvoyer un tableau contenant la racine carrée de chaque élement du tableau d'entrée.

Exemple: Pour un tableau _elements_ = **[1, 4, 9]**

$\sqrt{1}$ = 1 <br>
$\sqrt{4}$ = 2 <br>
$\sqrt{9}$ = 3 <br>

Alors _**array_sqrt**(elements)_ = **[1, 2, 3]**. <br>

## 2 - Filtre entier 

La deuxième fonction **array_integer** est un simple filtre. Elle prend un tableau en entrée, et renvoie un tableau contenant tous les éléments entiers passés en argument. 

Exemple: Pour un tableau _elements_ = **[1, 3.14, 4, 5.12, 9]**

1 est **entier** <br>
3.14 n'est **pas entier** <br>
4 est **entier** <br>
5.12 n'est **pas entier** <br>
9 est **entier** <br>

Alors _**array_sqrt**(elements)_ = **[1, 4, 9]**. <br>

## 3 - Somme

La troisième fonction **array_sum** prend un tableau d'entier en entrée et renvoie la somme de tous les élements du tableau

Exemple: Pour un tableau _elements_ = **[1, 4, 9]**

1 + 4 + 9 = 14

Alors _**array_sum**(elements)_ = **14**. <br>

## 4 - La somme des racines des carrés parfaits

Rappel: un nombre est dit carré parfait lorsqu'il est le carré d'un entier. Dit autrement, un nombre n est un carré parfait si $\sqrt{n}$ = k, où k est un entier. <br>

Exemple: 

4 est un carré parfait car $\sqrt{4}$ = 2, et 2 est un entier <br>
9 est un carré parfait car $\sqrt{9}$ = 3, et 3 est un entier <br>
5 n'est pas un carré parfait car $\sqrt{5}$ = 2.23, et 2.23 n'est pas entier <br>
7 n'est pas un carré parfait car $\sqrt{7}$ = 2.64, et 2.64 n'est pas entier <br>


Pour la dernière fonction **perfect_square_root_sum**, essayons de combiner les différentes fonctions implémentées précedemment. A partir d'un tableau _elements_ en entrée, renvoyer la somme des racines des carrés parfaits de cette liste.

Exemple: Pour un tableau _elements_ = [1, 2, 3, 4, 5]

$\sqrt{1}$ = 1 <br>
$\sqrt{2}$ = 1.41 <br>
$\sqrt{3}$ = 1.73 <br>
$\sqrt{4}$ = 2 <br>
$\sqrt{5}$ = 2.23 <br>

Seuls 1 et 4 sont des carrés parfaits car leur racine est entière, on conserve donc uniquement les racines de ces nombres, donc [1, 2]

Ensuite on les somme: 1 + 2 = 3

Ainsi _**perfect_square_root_sum**(elements)_ = 3.



