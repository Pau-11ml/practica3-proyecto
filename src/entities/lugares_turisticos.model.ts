import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'lugares_turisticos' })
export class LugaresTuristicos {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nombre_lugar!: string;

  @Column()
  ubicacion!: string;

  @Column({ type: 'text' })
  descripcion!: string;

  mostrarInformacion(): void {
    console.log(`📍 ${this.nombre_lugar} - ${this.descripcion}`);
  }

  verUbicacion(): void {
    console.log(`🗺️ Ubicación: ${this.ubicacion}`);
  }
}
