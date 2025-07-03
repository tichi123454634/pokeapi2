function getPokemon() { 
    let search = document.getElementById('search');
    let pokemon = search.value.toLowerCase(); // Esto les convierte en minuscula cualquier palabra para evitar errores gramaticales

    const url = 'https://pokeapi.co/api/v2/pokemon/' + pokemon;

    fetch(url)
        .then(res => res.json())
        .then(data => {
            let name = data.name;
            let types = data.types.map(t => t.type.name).join(', ');
            let spriteFront = data.sprites.front_default;
            let spriteBack = data.sprites.back_default;
            let weight = data.weight;
            let height = data.height;
            let abilities = data.abilities.map(a => a.ability.name).join(', ');
            let baseExp = data.base_experience;
            let id = data.id;
            let moves = data.moves.slice(0, 5).map(m => m.move.name).join(', ');
            let stats = data.stats.map(s => `${s.stat.name}: ${s.base_stat}`).join(', ');
            let forms = data.forms.length;
            let order = data.order;
        
            // Asignación a elementos HTML (¡asegúrate que existen en tu HTML!)
            document.getElementById('name').textContent = name;
            document.getElementById('type').textContent = "Tipos: " + types;
            document.getElementById('weight').textContent = weight + " lb";
            document.getElementById('height').textContent = height + " dm";
            document.getElementById('abilities').textContent = "Habilidades: " + abilities;
            document.getElementById('pokeID').textContent = "ID: " + id;
            document.getElementById('moves').textContent = "Movimientos: " + moves;
            document.getElementById('order').textContent = "Orden Pokédex: " + order;
        
            // Imágenes
            document.getElementById('sprite').src = spriteFront;
            document.getElementById('spriteBack').src = spriteBack;
        })
        .catch(() => {
            alert('Pokemon no encontrado');
        });}