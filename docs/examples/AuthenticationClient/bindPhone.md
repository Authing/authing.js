```python
phone = '176xxxx7041'
user = authentication_client.bind_phone(
    phone=phone,
    phoneCode='1234',
)
```

```c#
var phone = "phone number";
var phoneCode = "1234"
await authenticationClient.BindPhone(phone, phoneCode);
```