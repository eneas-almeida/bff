up:
	docker-compose up -d

down:
	docker-compose down

ammend:
	git add --all && git commit --amend --no-edit && git push origin main -f

.PHONY: up down ammend
