$('document').ready(function(){

    let v1 = localStorage.getItem('nombre');
    let v2 = localStorage.getItem('plan');
    let v3 = localStorage.getItem('periodo');
    let v4 = localStorage.getItem('idplan');
    let servicio;
    let plan;
    let costof;
    let costos = ['1000', '800', '700'];


  function findeSesion(){
    localStorage.clear();
    location.reload();
  }

    if (v1 == null){

      $('#dedv').hide();
      $('#assis').show();
     
    } else {
     
      switch (v2){
        case "1":
          servicio = 'Premium';
        break
        case "2":
          servicio = 'basico';
        break
      }


      switch (v3){
        case "1":
          plan = 'Mensual';
          costof = costos[0];
        break
        case "2":
          plan = 'Semestral';
          costof = costos[2];

        break
        case "3":
          plan = 'Anual';
          costof = costos[3];

        break
      }


      $('#assis').hide();
      $('#dedv').show();

        $('#dedv').html(

          ` Gracias por utilizar nuestro asistente de presupuestos. <br>
            Estimado ${v1}, le acercamos su presupuesto para el servicio de Camicase. Contemple que la vida util de este es de 48Hrs.
            <br>
            El plan es para el servicio ${servicio} con pago ${plan} pretende un costo de $${costof} por periodo seleccionado.
            <br>
            El ID de su presupuestos es el ${v4}, tome nota para poder retomar la propuesta.
          <br>
          <br>
           <button class="btn btn-sm btn-danger" id='d'>Crear un nuevo presupuesto</button> 

          `

        );


      $('#d').click(function(){
        if (window.confirm("Esta accion borrara el presupuesto "+v4+"\nDesea continuar?")) {
          findeSesion();
        }
      })

    }


  })

  $("#btnah").click(function(){
    let na = $("#nombre").val()
    let ap = $("#apellido").val()
      if (na == ''){
        alert('Hey, ingresa tu nombre')
      } else if (ap == '') {
        alert('Te olvidaste del apellido')
      } else {
        localStorage.setItem('nombre', na+" "+ap );
        $('#div1').hide('slow');
        $('#div2').show('slow');
      }
    
  });

  $('#select1').change(function(){
    let s1 = $("#select1").val()
    if( s1 != 0){ $('#pred1').show(); }
    else { $('#pred1').hide(); }
  });

  $('#btn2').click(function(){

    let s1 = $("#select1").val()
    let s2 = $("#select2").val()

    localStorage.setItem('periodo', s1 );
    localStorage.setItem('plan', s2 );
    localStorage.setItem('idplan', Math.floor(Math.random()*1000000000) );
    location.reload();
  });