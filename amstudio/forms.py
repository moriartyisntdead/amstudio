from django import forms
from django.conf import settings
from django.contrib.auth.models import User
from django.core.mail import send_mail, send_mass_mail


class ContactForm(forms.Form):
    name = forms.CharField(required=True)
    phone = forms.RegexField(r'^\+38\(0\d{2}\)\d{3}-\d{2}-\d{2}$', required=True, )
    email = forms.EmailField(required=True)
    message = forms.CharField(required=True, widget=forms.Textarea())

    def proceed_request(self, name, phone, email, message):
        send_mail('Amstudio: Your request is accepted',
                  'Thank you for your request. We will proceed it as soon as possible.',
                  settings.EMAIL_HOST_USER, [email])

        staff = User.objects.filter(is_staff=True)
        for user in staff:
            user.email_user('New request',
                            f'New request has been sent from {name}.\n\n'
                            f'User data:\n\t'
                            f'- phone: {phone}\n\t'
                            f'- email: {email}\n\t'
                            f'- message:\n {message}')
