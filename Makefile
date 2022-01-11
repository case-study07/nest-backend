## Git Operation
develop:
	@git checkout -b feature-$(issue) && \
	git commit --allow-empty -m "開発開始" && \
	git push origin feature-$(issue) && \
	gh pr create -b "close #$(issue)" -a @me -w

## TypeORM Operation
migration:
	@npm run typeorm migration:run

migration.gen:
	@npm run typeorm migration:generate -n $(name)

migration.create:
	@npm run typeorm migration:create -n $(name)

migration.rollback:
	@npm run typeorm migration:revert