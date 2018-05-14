<?php
namespace app\index\controller;

use think\Controller;
use think\Db;
use think\Request;

class Index extends Controller
{
    /**
    * Create new object
    */
    public function create(Request $request)
    {
      $file = $request->file('file');
      $des = $request->post('description');
      if (empty($file)) {
          return '请选择上传文件';
      }
      $info = $file->move(ROOT_PATH . 'public' . DS . 'uploads');
      $path = $info->getRealPath();
      Db::name('data')->insert(['data' => $path, 'description' => $des]);
      return json('success')->header(['Access-Control-Allow-Origin' => '*']);
    }


    /**
    * Delete object by id
    */
    public function delete(Request $request)
    {
      $id = $request->post('id');
      Db::name('data')->where('id', $id)->delete();
      return json('success')->header(['Access-Control-Allow-Origin' => '*']);
    }

    /**
    * Find one object by id
    */
    public function findOne(Request $request)
    {
      $id = $request->post('id');
      $data = Db::name('data')
      ->where('id', $id)
      ->select();
      return json($data)->header(['Access-Control-Allow-Origin' => '*']);
    }

    /**
    * Find all object
    */
    public function findAll()
    {
      $data = Db::name('data')
      ->select();
      return json($data, 200, ['Access-Control-Allow-Origin' => '*']);
    }

    /**
    * Update object by Id
    */
    public function update(Request $request)
    {

      return 'Just private function!';
    }
}
