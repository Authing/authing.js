```python
# 设置 int 类型数据
authentication_client.set_udv(
  key="age",
  value=15
)

# 设置 boolen 类型数据
authentication_client.set_udv(
  key="is_ok",
  value=True
)
```

```c#
var key = "key";
var anyValue = "value";
var list = await authenticationClient.SetUdv(key, anyValue);
Console.WriteLine(list.Count());
```