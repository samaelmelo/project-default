Quando se utiliza o memo no react???

- quando você tem um componente que está sendo renderizado desnecessariamente sem ele ao menos possuir um estado.
ex: quando um componente filho não possuir um estado, mas devido o seu pai possuir ele acaba sendo renderizado diversar vezes.


- então, no caso quem está sendo renderizado desnecessariamente utiliza o memo do react para que ele não renderize diversas vezes.