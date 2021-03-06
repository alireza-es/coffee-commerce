import { TYPE_ORM } from '@environments'
import { Injectable } from '@nestjs/common'
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm'

@Injectable()
export class TypeOrmService implements TypeOrmOptionsFactory {
	async createTypeOrmOptions(): Promise<TypeOrmModuleOptions> {
		const options = {
			...TYPE_ORM,
			type: 'mongodb',
			// entities: getMetadataArgsStorage().tables.map(tbl => tbl.target),
			entities: [__dirname + '/**/*.entity.{ts,js}'],
			synchronize: true,
			autoLoadEntities: true,
			useNewUrlParser: true,
			useUnifiedTopology: true,
			keepConnectionAlive: true,
			logging: true
		}
		return options
	}
}
