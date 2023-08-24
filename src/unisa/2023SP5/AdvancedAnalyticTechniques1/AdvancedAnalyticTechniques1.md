---
title: Fourier Series Models
index: false
icon: dragon
author: Haiyue
date: 2023-07-20
category:
  - math
tag:
  - fourier
  - math
---

## 1 Fourier Series Models
### Fourier story
::: justify
Baron Jean-Baptiste Joseph Fourier introduced the idea that an arbitrary function, even one defined by different expressions in adjacent sections of its range as in a staircase waveform, could be represented a single expression. Fourier developed the idea as a direct result of his research into the flow of heat within solid bodies. 
Fourier was apparently obsessed with heat, one anecdote tells of him receiving visitors in his rooms with a roaring fire and wearing a heavy overcoat despite the summer temperature. This obsession may have been due to his sojourn in Egypt as a member of Napoleon’s Savants, 165 of the best and brightest of France’s academics.
By 1807 he had completed his theory of heat conduction which depended on the idea of analysing temperature distribution of heat within a metal bar into spatially sinusoidal components. Publication was hindered by a lack of support from the great mathematicians of the day, LaPlace, Lagrange and Poisson among others, who expressed doubts as to its veracity. Nevertheless, Fourier’s theory won a prestigious prize for mathematics in 1811 albeit with a caveat mentioning lack of generality and rigor. In fact publication was delayed further until 1815.
The problem lay in the fact that Fourier integrals rely on an interval stretching to infinity in all directions. In order to completely characterise the heat distribution in a metal bar the bar would have to be of infinite length as Fourier integrals are, by definition, over the interval [∞, ∞]. Fourier circumvented this difficulty by considering a bar that had been bent into a circle. In this way the temperature is thus forced to be spatially periodic. There is no problem with generality if one supposes the circumference of the circular bar to be larger than the greatest distance that could be of interest on a straight bar conducting heat.


The fomula <span style="color:red">$\frac{x}{2}=sin(x) - \frac{1}{2}sin(2x)+\frac{1}{3}sin(3x) ...$ </span>is published by Euler when Fourier was only a boy and forms the basis on which Fourier built his theory.
This formula is <span style="color:red">correct</span> however only for <span style="color:red">$−π < x < π$</span> and <span style="color:orange">not for other ranges of x</span>. The right hand side is the Fourier series for the saw tooth periodic function f defined by:

$f(x) = \begin{cases}
   \frac{x}{2} &\text{if } -π <x<π \\
   0 &\text{if } x=π \\
   f(x+2π) &\text{if } others
\end{cases}$

Fourier wrote ”the equation is no longer true when the value of x is between π and 2π.
However, the second side of the equation is still a convergent series but the sum is not equal to $\frac{x}{2}$. Euler who knew this equation gave it without comment”.

::: 

### Fourier Series
::: justify
Any <span style="color:red">periodic function</span> satisfies the relation: <span style="color:red">$f(t) = f(t + T)$</span> where <span style="color:red">$T$</span> is the period of the function.

The simplest and most common periodic functions are the trigonometric functions. The functions <span style="color:red">$sin(nt)$</span> and <span style="color:red">$cos(nt)$</span>, $n ∈ 0, 1, 2, 3...$ being harmonic are by definition periodic with periods $\frac{2π}{n}$. Because trigonometric functions are relatively easy to work with and because they possess the important property of orthogonality they are more desirable than an arbitrary function. Accordingly it may be advantageous to expand the arbitrary function into series of trigonometric functions, the expansion being the Fourier Series.


Consider a set of functions which satisfy
:::
::: center
$$
\begin{equation}
\begin{split}
\int_{0}^{T}\psi_r(t)\psi(t)dt=0; r,s=1,2,...;r\neq s
\end{split}
\end{equation}
$$
:::
The set <span style="color:red">$\psi_r(t)$</span> is said to be <span style="color:red">orthogonal</span> in any interval of length $T$. If in addition they satisfy
::: center
$$
\begin{equation}
\begin{split}
\int_{0}^{T}\psi_r(t)^2dt=1; r,s=1,2,...
\end{split}
\end{equation}
$$
:::
Then they are <span style="color:red">orthonormal</span>, hence for an orthonormal set we have
::: center
$$
\begin{equation}
\begin{split}
\int_{0}^{T}\psi_r(t)\psi(t)dt=\delta_{rs}; r,s=1,2,...
\end{split}
\end{equation}
$$
:::

::: justify
where <span style="color:red">$\delta_{rs}$</span> is equal to unity when <span style="color:red">$r=s$ and zero</span> otherwise. This is called the <span style="color:red">Krondecker delta</span>. For example it is easy to verify that the set of functions
:::
::: center
$$
\begin{equation}
\begin{split}
\frac{1}{\sqrt{2\pi}},\frac{sin(t)}{\sqrt{\pi}},\frac{cos(t)}{\sqrt{\pi}},\frac{sin(2t)}{\sqrt{\pi}},\frac{cos(2t)}{\sqrt{\pi}},\frac{sin(3t)}{\sqrt{\pi}}
\end{split}
\end{equation}
$$
:::

constitutes an orthonormal set. We can write
$$
\begin{equation}
\begin{split}
   0 &=\int_{0}^{2\pi} \frac{1}{\sqrt{2\pi}}\frac{sin(rt)}{\sqrt{\pi}}dt = =-\frac{1}{\sqrt{2}\pi}\frac{cos(rt)}{r}\mid_{0}^{2\pi}\\
   &=\int_{0}^{2\pi} \frac{1}{\sqrt{2\pi}}\frac{cos(rt)}{\sqrt{\pi}}dt = =-\frac{1}{\sqrt{2}\pi}\frac{sin(rt)}{r}\mid_{0}^{2\pi}\\
   r &= 1, 2, ...
\end{split}
\end{equation}
$$

For $r \neq s$ we have
$$
\begin{equation}
\begin{split}
   \int_{0}^{2\pi}\frac{sin(rt)}{\sqrt{\pi}}\frac{cos(rt)}{\sqrt{\pi}}dt &=\frac{1}{2\pi}\int_{0}^{2\pi}[cos(r+s)t\ sin(r-s)t)]dt\\
   &=-\frac{1}{2\pi}[\frac{cos(r+s)t}{r+s} + \frac{cos(r-s)t}{r-s}]_0^{2\pi}\\
   &= 0
\end{split}
\end{equation}
$$

and for $r = s$
$$
\begin{equation}
\begin{split}
   \int_{0}^{2\pi}\frac{sin(rt)}{\sqrt{\pi}}\frac{cos(rt)}{\sqrt{\pi}}dt &=\frac{1}{2\pi}\int_{0}^{2\pi}sin(2rt)dt\\
   &=-\frac{1}{4r\pi}cos(2rt)|_{0}^{2\pi}\\
   &= 0
\end{split}
\end{equation}
$$