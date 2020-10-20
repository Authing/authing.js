```python
username = 'bob'
user = authentication_client.register_by_username(
    username=username,
    password='passw0rd',
    auto_register=True, # 如果用户不存在，是否自动注册。
)
```

```c#
var username = "username";
var password = "123456";
var user = await authenticationClient.LoginByUsername(username, password);
Console.WriteLine(user.Username);
```