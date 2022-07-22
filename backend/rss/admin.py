from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import Album, User

class AlbumAdmin(admin.ModelAdmin):
    list_display = ('rank', 'artist', 'title')


admin.site.register(User, UserAdmin)
admin.site.register(Album, AlbumAdmin)