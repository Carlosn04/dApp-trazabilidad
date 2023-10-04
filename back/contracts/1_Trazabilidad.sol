// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.2 <0.9.0;

contract Trazabilidad {
    enum Estado { Productor, Almacen, Mayorista, Minorista }
    
    struct Organizacion {
        string nombre;
        address direccion;
        Estado estado;
    }

    struct Evento {
        uint256 fecha;
        address direccionOrganizacion;
        bytes32 firma;
    }

    mapping(string => Evento[]) public trazabilidad;
    mapping(address => Organizacion) public organizaciones;

    function registrarOrganizacion(string memory _nombre, Estado _estado) public {
        Organizacion memory org = Organizacion({
            nombre: _nombre,
            direccion: msg.sender,
            estado: _estado
        });
        organizaciones[msg.sender] = org;
    }

    function validarTransicion(Estado previo, Estado actual) private pure returns (bool) {
        return
            (previo == Estado.Productor && actual == Estado.Almacen) ||
            (previo == Estado.Almacen && actual == Estado.Mayorista) ||
            (previo == Estado.Mayorista && actual == Estado.Minorista);
    }

    function agregarEvento(string memory etiqueta) public {
        require(
            bytes(organizaciones[msg.sender].nombre).length != 0,
            "Not registered!"
        );

        Evento memory nuevoEvento = Evento({
            fecha: block.timestamp,
            direccionOrganizacion: msg.sender,
            firma: keccak256(abi.encodePacked(block.timestamp))
        });

        trazabilidad[etiqueta].push(nuevoEvento);
    }

    function agregarEventosBatch(string[] memory etiquetas) public {
        require(
            bytes(organizaciones[msg.sender].nombre).length != 0,
            "Need to register organization"
        );

        for (uint256 i = 0; i < etiquetas.length; i++) {
            Evento memory nuevoEvento = Evento({
                fecha: block.timestamp,
                direccionOrganizacion: msg.sender,
                firma: keccak256(abi.encodePacked(block.timestamp))
            });

            trazabilidad[etiquetas[i]].push(nuevoEvento);
        }
    }

    function obtenerEventos(string memory etiqueta) public view returns (Evento[] memory) {
        return trazabilidad[etiqueta];
    }
}