//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Libro } from '../../models/libro.model';
import { Usuario } from '../../models/usuario.model';
import { Pedido } from '../../models/pedido.model';
/*
  Generated class for the SiersProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SiersProvider {
	constructor(public afDB:AngularFireDatabase) {
		console.log('Hello SiersProvider Provider');
	}
	
	guardarLibro(libro:Libro){
		if (libro.isbn=='') {libro.isbn=""+Date.now();}
		return this.afDB.database.ref('libros/'+libro.titulo).set(libro);
	}
	
	delLibro(titulo){
		this.afDB.database.ref('libros/'+titulo).remove();
	}
	
	private librosRef=this.afDB.list<Libro>('libros');
	
	getLibros(){
		return this.librosRef.valueChanges();
	} 
	
	guardarUsuario(usuario:Usuario){
		return this.afDB.database.ref('usuarios/'+usuario.nombre).set(usuario);
	}
	
	private usuariosRef=this.afDB.list<Usuario>('usuarios');
	
	getUsuario(){
		return this.usuariosRef.valueChanges();
	} 
	
	private pedidosRef=this.afDB.list<Pedido>('pedidos');
	
	getPedidos(){
		return this.pedidosRef.valueChanges();
	}
	
	guardarPedido(pedido:Pedido){
		return this.afDB.database.ref('pedidos/'+pedido.titulo).set(pedido);
	}
	
	delPedido(titulo){
		this.afDB.database.ref('pedidos/'+titulo).remove();
	}
}
