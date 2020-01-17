---
title: "Aha! Postgres"
date: "2017-09-18T23:19:51.246Z"
description: "A first blog post"
tags: [ "technical", "devops", "developer"]
published: "yes"
---

<!-- # Aha! Postgres -->

Postgres(PG) is a very popular and usefull SQL database, it used by many web app framework tutorials and in this post I want to share how you can run it on your Mac using Docker. 

Running PG instances in containers has three advantages over traditional installation:

* First, isolation makes it much easier to understand where the database files and data are, what version of the database is running and what application has access to the DB.

* Second, maintenance and operations are much easier: config file corrupted? No problem, delete the container and start over. Need a older PG version? Just change the container version.

* Third, running multiple db instances at the same time is easy and safe.

## Show me the code

Github repo: <https://github.com/matteomelani/postgres-in-docker.git>


## Basic operations

Start the db with

```bash
> docker-compose up
```

The init-user-db.sh script uses the enviroment variables defined in the docker-compose file

```yml
# from docker-compose.yml

    environment:
        - DB_USERNAME=my_username
        - DB_PASSWORD=my_password
        - DB_NAME=mydb

```

to create a new role and a new database.

Get the name or id of the container running PG with

```bash
> docker ps
```

Attach to the running container and start a shell

```bash
> docker exec -i -t CONTAINER /bin/bash
```

Run psql inside the container

```bash
root@cd4f38e942a2:/# psql -U postgres
```

List existing databases

```bash
psql (11.5 (Debian 11.5-3.pgdg90+1))
Type "help" for help.

postgres=# \l
                              List of databases
   Name    |  Owner   | Encoding |  Collate   |   Ctype    |    Access privileges     
-----------+----------+----------+------------+------------+--------------------------
 mydb      | postgres | UTF8     | en_US.utf8 | en_US.utf8 | =Tc/postgres            +
           |          |          |            |            | postgres=CTc/postgres   +
           |          |          |            |            | my_username=CTc/postgres
 postgres  | postgres | UTF8     | en_US.utf8 | en_US.utf8 | 
 template0 | postgres | UTF8     | en_US.utf8 | en_US.utf8 | =c/postgres             +
           |          |          |            |            | postgres=CTc/postgres
 template1 | postgres | UTF8     | en_US.utf8 | en_US.utf8 | =c/postgres             +
           |          |          |            |            | postgres=CTc/postgres
(4 rows)

```

Easily access the db configuration files and data from the container

```bash
postgres=# \q
root@cd4f38e942a2:/# ls -l /pgdata
```

Stop the db with

```bash
> docker-compose down
```

## Connecting from localhost

To connect from your host to the PG running in the container it is necessary to change the PG configuration
to enable connection from other hosts.
Use the following command to modify the pg_hba.conf file

```bash
> docker exec -i -t CONTAINER  bash -c 'echo "host all all 0.0.0.0/0 md5" >> /pgdata/pg_hba.conf '
```

Use the following command to make sure the pg_hba.conf has the new string appended at the bottom

```bash
> docker exec -i -t CONTAINER  cat "/pgdata/pg_hba.conf"
```

Now restart the container with

```bash
> docker-compose down && docker-compose up
```

You can use docker-compose restart but the container will be running in the background.

You can now connect to the db from the localhost. Open a new terminal and type

```bash
> psql -l localhost -p 9432 -U postgres
```


## Resources

1) [Official Docker pages maintained by the Postgres folks](<https://hub.docker.com/_/postgres>)
2) [Github repo for reference 1](<https://github.com/docker-library/postgres>)
3) [Init-User-DB.sh source](<https://medium.com/@beld_pro/quick-tip-creating-a-postgresql-container-with-default-user-and-password-8bb2adb82342>)