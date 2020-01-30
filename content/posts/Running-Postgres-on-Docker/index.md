---
title: "Running Postgres on Docker"
date: "2019-10-15T23:19:51.246Z"
description: "How to run Postgres on Docker on your Mac."
tags: [ "technical", "devops", "developer"]
published: "yes"
---


### Running Postgres on Docker

*October 15th 2019*  
*Code: <https://github.com/matteomelani/postgres-in-docker.git>*  

Here is how I run Postgres(PG) on my Mac using Docker.  
Running PG instances in containers has 3 advantages over traditional installation:

* First, isolation makes it much easier to understand where the database files and data are, what version of the database is running and what application has access to the DB.

* Second, maintenance and operations are much easier: config file corrupted? No problem, delete the container and start over. Need a older PG version? Just change the container version.

* Third, running multiple db instances at the same time is easy and safe.

<br>

#### Operations

Start/stop the db

```bash
localhost> docker-compose up
localhost> docker-compose down
```

The *init-user-db.sh* script uses the enviroment variables defined in the docker-compose file to create a new role and a new database. From *docker-compose.yml*

```yml
environment:
    - DB_USERNAME=my_username
    - DB_PASSWORD=my_password
    - DB_NAME=mydb
```

To run a shell in the container

```bash
# look up name/id of container running PG
> docker ps

# start a bash in container
> docker exec -i -t CONTAINER /bin/bash

# run psql inside container
root@cd4f38e942a2:/# psql -U postgres

# list db config files/data in container
root@cd4f38e942a2:/# ls -l /pgdata  
```
<br>

#### Connecting from localhost

To connect from your host to the PG running in the container change the PG configuration to enable connection from other hosts.

```bash
# add config line to allow connection from any IP
localhost> docker exec -i -t CONTAINER  bash -c 'echo "host all all 0.0.0.0/0 md5" >> /pgdata/pg_hba.conf '

# review updated configuration
localhost> docker exec -i -t CONTAINER  cat "/pgdata/pg_hba.conf"

# restart container
localhost> docker-compose down && docker-compose up

# connect to the db from the localhost in new terminal
localhost> psql -l localhost -p 9432 -U postgres
```
<br>

#### Resources

1) [Official Docker pages maintained by the Postgres folks](<https://hub.docker.com/_/postgres>)
2) [Github repo for reference 1](<https://github.com/docker-library/postgres>)
3) [Init-User-DB.sh source](<https://medium.com/@beld_pro/quick-tip-creating-a-postgresql-container-with-default-user-and-password-8bb2adb82342>)