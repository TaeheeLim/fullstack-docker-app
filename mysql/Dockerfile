FROM mysql:5.7

# RUN chown -R mysql:mysql /var/lib/mysql && \
#     chmod -R 750 /var/lib/mysql

ADD ./my.cnf /etc/mysql/conf.d/my.cnf

RUN chmod 444 /etc/mysql/conf.d/my.cnf