color.value = storage1;
setColor();
color.addEventListener('input', setColor)
color.addEventListener('change', ()=> saveColor(color.value))

