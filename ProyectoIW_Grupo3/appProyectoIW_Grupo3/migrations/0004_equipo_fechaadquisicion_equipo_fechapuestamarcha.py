# Generated by Django 4.0.3 on 2022-04-25 16:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('appProyectoIW_Grupo3', '0003_ticket_fechaapertura_ticket_fecharesolucion'),
    ]

    operations = [
        migrations.AddField(
            model_name='equipo',
            name='fechaAdquisicion',
            field=models.DateField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='equipo',
            name='fechaPuestaMarcha',
            field=models.DateField(blank=True, null=True),
        ),
    ]
