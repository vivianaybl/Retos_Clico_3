
function leerClientes() {
    $.ajax({
        url : 'https://g825edac8aa8b8e-op71qc98lqjaeuhw.adb.sa-vinhedo-1.oraclecloudapps.com/ords/admin/open-api-catalog/client/',
        type : 'GET',
        dataType : 'json',
        success : function(clientes) {
            let cs=clientes.items;
            $("#listaClientes").empty();

            for (i=0; i<cs.lengrh;i++){
                $("#listaClientes").append(cs[i].id +" <b>"+cs[i].name+"</b> "+cs[i].correo+ " "+ cs[i].age);
                $("#listaClientes").append("<button onclick='borrarCliente("+cs[i].id+")'>Borrar</button><br>");
            }
           
        },
        error : function(xhr, status) {
            alert('ha sucedido un problema');
        },
        });
}

function guardarCliente(){
    let idCliente=$("idcliente").val();
    let nombre=$("nombrecliente").val();
    let correo=$("correocliente").val();
    let edad=$("edadcliente").val();

    let data={
        id:idCliente,
        name:nombre,
        email:correoCliente,
        age:edad
    };
    let dataTosend=JSON.stringify(data)
    console.log(data);
};

$.ajax({
    url : 'https://g825edac8aa8b8e-op71qc98lqjaeuhw.adb.sa-vinhedo-1.oraclecloudapps.com/ords/admin/open-api-catalog/client/',
    type : 'PUT',
    dataType : 'json',
    data:dataToSend,
    contentType:"application/json",

    complete : function(clientes) {
        $("idcliente").val("");
        $("nombrecliente").val("");
        $("correocliente").val("");
        $("edadcliente").val("");  
    },
    error : function(xhr, status) {
        alert('ha sucedido un problema');
    },
    complete: function(){
        leerClientes();
    }
    });

function editarCliente(){
        let idCliente=$("idcliente").val();
    let nombre=$("nombrecliente").val();
    let correo=$("correocliente").val();
    let edad=$("edadcliente").val();

    let data={
        id:idCliente,
        name:nombre,
        email:correoCliente,
        age:edad
    };
    let dataTosend=JSON.stringify(data)
    console.log(data);
};

$.ajax({
    url : 'https://g825edac8aa8b8e-op71qc98lqjaeuhw.adb.sa-vinhedo-1.oraclecloudapps.com/ords/admin/open-api-catalog/client/',
    type : 'POST',
    dataType : 'json',
    data:dataToSend,
    contentType:"application/json",

    complete : function(pepito) {
        $("idcliente").val("");
        $("nombrecliente").val("");
        $("correocliente").val("");
        $("edadcliente").val("");


       
    },
    error : function(xhr, status) {
        alert('ha sucedido un problema');
    },
    complete: function(){
        leerClientes();
    }
    });
    
function borrarCliente(idCliente){
        
    let data={
        id:idCliente,
    };
    let data ToSend=JSON.stringify(data)
    }
    


$.ajax({
    url : 'https://g825edac8aa8b8e-op71qc98lqjaeuhw.adb.sa-vinhedo-1.oraclecloudapps.com/ords/admin/open-api-catalog/client/',
    type : 'POST',
    dataType : 'json',
    data:dataTosend,
    contentType:"application/json",

    complete : function(pepito) {
        $("idcliente").val("");
        $("nombrecliente").val("");
        $("correocliente").val("");
        $("edadcliente").val("");
 },
    error : function(xhr, status) {
        alert('ha sucedido un problema');
    },
    complete: function(){
        leerClientes();
    }
    });
