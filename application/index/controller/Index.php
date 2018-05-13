<?php
namespace app\index\controller;

use think\Controller;
use think\Db;
use think\Request;

class Index extends Controller
{
    public function index(Request $request)
    {
      // 获取表单上传文件
      $file = $request->file('file');
      $des = $request->post('description');
      if (empty($file)) {
          return '请选择上传文件';
      }
      // 移动到框架应用根目录/public/uploads/ 目录下
      $info = $file->move(ROOT_PATH . 'public' . DS . 'uploads');
      $path = $info->getRealPath();
      Db::name('data')->insert(['data' => $path, 'description' => $des]);
      return 'success';
    }

    public function hello()
    {
      $data = ['data' => 'thinkphp', 'status' => '1'];
      return json($data, 201);
    }

    public function home_page($name = 'thinkphp')
    {
      $this->assign('name', $name);
      return $this->fetch('hello');
    }

    public function test()
    {
      return 'This is an test function!';
    }

    public function hello2(Request $request,$name = 'World')
    {
      // 获取当前域名
        echo 'domain: ' . $request->domain() . '<br/>';
        // 获取当前入口文件
        echo 'file: ' . $request->baseFile() . '<br/>';
        // 获取当前URL地址 不含域名
        echo 'url: ' . $request->url() . '<br/>';
        // 获取包含域名的完整URL地址
        echo 'url with domain: ' . $request->url(true) . '<br/>';
        // 获取当前URL地址 不含QUERY_STRING
        echo 'url without query: ' . $request->baseUrl() . '<br/>';
        // 获取URL访问的ROOT地址
        echo 'root:' . $request->root() . '<br/>';
        // 获取URL访问的ROOT地址
        echo 'root with domain: ' . $request->root(true) . '<br/>';
        // 获取URL地址中的PATH_INFO信息
        echo 'pathinfo: ' . $request->pathinfo() . '<br/>';
        // 获取URL地址中的PATH_INFO信息 不含后缀
        echo 'pathinfo: ' . $request->path() . '<br/>';
        // 获取URL地址中的后缀信息
        echo 'ext: ' . $request->ext() . '<br/>';

        return 'Hello,' . $name . '！';
    }

    private function hello3()
    {
      return 'Just private function!';
    }
}
