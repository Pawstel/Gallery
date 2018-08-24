FROM postgres:latest

ENV POSTGRES_PASSWORD='pawstelGallery'
ENV POSTGRES_DB=pawstel_gallery_service
ENV POSTGRES_USER=pawstel

RUN mkdir -p /csvFolder/

WORKDIR /csvFolder/

COPY /csvFolder/ /csvFolder/

ADD psqlSchema.sql /docker-entrypoint-initdb.d

EXPOSE 5432