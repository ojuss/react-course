import React from 'react';

function Card ({username = "ojus", post = "Not assigned yet", source ="https://images.pexels.com/photos/18300234/pexels-photo-18300234/free-photo-of-corner-of-building-with-windows.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"}) {
  return (
    <div>
      <figure class="md:flex bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
        <img class="w-24 h-24 rounded-full mx-auto" src={source} alt="" width="384" height="512"/>
        <div class="pt-6 text-center space-y-4">
          <blockquote>
            <p class="text-lg font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, eveniet?
            </p>
          </blockquote>
          <figcaption class="font-medium">
            <div class="text-sky-500 dark:text-sky-400">
              {username}
            </div>
            <div class="text-slate-700 dark:text-slate-500">
              {post}
            </div>
          </figcaption>
        </div>
      </figure>

    </div>
  )
}

export default Card 