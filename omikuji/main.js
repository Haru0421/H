'use strict'

{
    const btn = document.getElementById('btn');
    const result = document.getElementById('result');

    btn.addEventListener('click', () => {
      const result = ['大吉','中吉','凶']; 
      const n = Math.floor(Math.random() * 3)

result.textContent = results[n];
    });
}