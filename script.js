const categorias = {
    frutas: [],
    lácteos: [],
    congelados: [],
    dulces: [],
    otros: []
  };
  
  let agregarAlimento = true;
  
  while (agregarAlimento) {
    const respuesta = prompt("¿Deseas agregar un alimento a tu lista de compras? Responde 'sí' o 'no'").toLowerCase();
  
    if (respuesta === "no") {
      agregarAlimento = false;
    } else if (respuesta === "sí" || respuesta === "si") {
      const alimento = prompt("¿Qué alimento deseas agregar?");
      const categoria = prompt("¿En qué categoría se encaja este alimento? (frutas, lácteos, congelados, dulces, otros)").toLowerCase();
  
      // Se agrega el alimento a la categoría correspondiente
      if (categorias[categoria] !== undefined) {
        categorias[categoria].push(alimento);
      } else {
        categorias.otros.push(alimento);
      }
    } else {
      alert("Por favor, responde 'sí' o 'no'.");
    }
  }
  
  // Mostrar la lista de compras en el textarea
  const listaTextarea = document.getElementById('listaCompras');
  listaTextarea.value = "Lista de compras:\n";
  
  for (const categoria in categorias) {
    listaTextarea.value += `${capitalize(categoria)}: ${categorias[categoria].join(", ") || "Ninguno"}\n`;
  }
  
  // Función para capitalizar la primera letra de la categoría
  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  