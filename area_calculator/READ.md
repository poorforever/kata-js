# AreaCalculator


## Calcule l'aire d'une figure géométrique à partir des coordonnées des sommets.

Pour le cas d'un cercle, la seule entrée du tableau sera le rayon R de celui-ci.

Pour le cas d'une figure à trois sommets ou plus, le tableau en entrée respectera les critères suivants:
- La taille du tableau est égale à deux fois le nombre de sommets
- Si la figure est composée des points
-   **K(x<sub>M</sub>, y<sub>M</sub>), L(x<sub>L</sub>, y<sub>L</sub>), M(x<sub>M</sub>, y<sub>M</sub>)**, alors
    le tableau en entrée sera de la forme <br/> **[x<sub>K</sub>, y<sub>K</sub>, x<sub>L</sub>, y<sub>L</sub>, x<sub>M</sub>, y<sub>M</sub>]**
- La figure géométrique est déterminée par l'ordre des coordonnées passées en entrée.
- Le tableau **[x<sub>K</sub>, y<sub>K</sub>, x<sub>L</sub>, y<sub>L</sub>, x<sub>M</sub>, y<sub>M</sub>, x<sub>N</sub>, y<sub>N</sub>]** forme la figure KLMN, et non KLNM

On rappelle les formules pour calculer l'aire de différentes figures géométriques

- Aire d'un cercle de rayon R:
  S = PI * R<sup>2</sup>

- Aire d'un triangle formé par les points A(x<sub>A</sub>, y<sub>A</sub>), B(x<sub>B</sub>, y<sub>B</sub>), C(x<sub>C</sub>, y<sub>C</sub>):<br/>
  **S =  0.5 * || x<sub>A</sub> * (y<sub>B</sub> - y<sub>C</sub>) + x<sub>B</sub> * (y<sub>C</sub> - y<sub>A</sub>) + x<sub>C</sub> * (y<sub>A</sub> - y<sub>B</sub>) ||**


- Aire d'un réctangle formé par les points A(x<sub>A</sub>, y<sub>A</sub>), B(x<sub>B</sub>, y<sub>B</sub>), C(x<sub>C</sub>, y<sub>C</sub>), D(x<sub>D</sub>, y<sub>D</sub>):<br/>
  **S = ||AB|| * ||AC||**

- Distance entre deux points X(x<sub>1</sub>, x<sub>2</sub>) et Y(y<sub>1</sub>, y<sub>2</sub>):<br/>
  **D = sqrt( (x<sub>1</sub> - y<sub>1</sub>)<sup>2</sup> + (x<sub>2</sub> - y<sub>2</sub>)<sup>2</sup> )**
