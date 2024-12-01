import { builder } from '@/graphql/builder';
import prisma from '@/lib/prisma';

builder.prismaObject('Sentence', {
	fields: (t) => ({
		id: t.exposeID('id'),
		quote: t.exposeString('quote', { nullable: true }),
		author: t.exposeString('author', { nullable: true }),
	}),
});

builder.queryField('sentence', (t) =>
	t.prismaField({
		type: 'Sentence',
		resolve: async (_query, _parent) => {
			const everyIdInTable = await prisma.sentence.findMany({
				select: { id: true },
			});
			const idArray = everyIdInTable.map((element) => element.id);
			const randomIndex = Math.floor(Math.random() * idArray.length);
			const randomIdFromTable = idArray[randomIndex];
			return prisma.sentence.findFirst({
				where: {
					id: randomIdFromTable,
				},
			});
		},
	}),
);
