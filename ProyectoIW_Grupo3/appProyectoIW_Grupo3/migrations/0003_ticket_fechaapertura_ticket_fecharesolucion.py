# Generated by Django 4.0.3 on 2022-04-25 15:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('appProyectoIW_Grupo3', '0002_rename_dni_ticket_empleado_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='ticket',
            name='fechaApertura',
            field=models.DateField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='ticket',
            name='fechaResolucion',
            field=models.DateField(blank=True, null=True),
        ),
    ]
