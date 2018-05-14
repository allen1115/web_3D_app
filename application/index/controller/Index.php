<?php
namespace app\index\controller;

use think\Controller;
use think\exception\DbException;
use think\Request;

use app\index\model\Museum;

class Index extends Controller
{
    /**
     * Create new object
     * @param Request $request
     * @return string|\think\response\Json
     */
    public function create(Request $request)
    {
        $x3d = $request->file('x3d');
        $img = $request->file('img');
        $video = $request->file('video');
        $des = $request->post('description');
        if (empty($file) || empty($img) || empty($video)) {
            return 'Please upload x3d or image or video';
        }
        $info1 = $x3d->move(ROOT_PATH . 'public' . DS . 'uploads');
        $x3d_path = $info1->getRealPath();
        $info2 = $img->move(ROOT_PATH . 'public' . DS . 'uploads');
        $img_path = $info2->getRealPath();
        $info3 = $video->move(ROOT_PATH . 'public' . DS . 'uploads');
        $video_path = $info3->getRealPath();

        $museum = new Museum;
        $museum->x3d = $x3d_path;
        $museum->img = $img_path;
        $museum->video = $video_path;
        $museum->description = $des;

        if($museum->save()){
            return json('success')->header(['Access-Control-Allow-Origin' => '*']);
        } else {
            return $museum->getError();
        }

    }

    public function hello($name = 'test')
    {
        $this->assign('name', $name);
        return $this->fetch();
    }


    /**
     * Delete object by id
     * @param Request $request
     * @return \think\response\Json
     * @throws DbException
     */
    public function delete(Request $request)
    {
        $id = $request->post('id');
        $museum = Museum::get($id);
        if($museum) {
            $museum->delete();
            return json('success')->header(['Access-Control-Allow-Origin' => '*']);
        } else {
            return json('failed')->header(['Access-Control-Allow-Origin' => '*']);
        }
    }

    /**
     * Find one object by id
     * @param Request $request
     * @return null|\think\response\Json
     * @throws DbException
     */
    public function findOne(Request $request)
    {
        $id = $request->param('id');
        $museum = Museum::get($id);
        return json($museum)->header(['Access-Control-Allow-Origin' => '*']);
    }

    /**
     * Find all object
     * @throws DbException
     */
    public function findAll()
    {
        $data = Museum::all();
        return json($data, 200, ['Access-Control-Allow-Origin' => '*']);
    }

    /**
     * Update object by Id
     * @param Request $request
     * @return \think\response\Json
     * @throws DbException
     */
    public function update(Request $request)
    {
      $id = $request->post('id');
      $description = $request->post('description');
      $museum = Museum::get($id);
      $museum->description = $description;
      $museum->save();
      return json('success')->header(['Access-Control-Allow-Origin' => '*']);
    }
}
