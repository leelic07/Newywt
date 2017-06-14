export default {
  //角色过滤器
  role(roleId){
    let roleName = '';
    switch(roleId){
      case 1 :
        roleName = '系统管理员';
        break;
      case 4 :
        roleName = '财务';
        break;
      case 6 :
        roleName = '打杂'
        break;
      default :
        roleName = '';
    }
    return roleName;
  }
}
