FROM python:3.12

WORKDIR /app

COPY . /app

RUN pip install --upgrade pip
RUN pip install -r requirements.txt

# collect static
RUN python manage.py collectstatic --noinput

CMD ["gunicorn", "balm.wsgi:application", "--bind", "0.0.0.0:8000"]