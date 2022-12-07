# GetStaticProps
<p>Now that we’ve discussed the differences and functionalities of client-side and server-side rendering, let’s proceed with diving deep into our data fetching functions. We’ll start with GetStaticProps. [15:06] of the video covers the explanation regarding this function.</p>

The salient points are listed below -

1. This method is primarily used inside a page to fetch data at build time.
2. Once the app is built, it will refuse to refresh the data till the time another build has been run.
3. The advantage of using GetStaticProps is that it lets the page be statically generated. As a result, out of all the available data fetching methods, GetStaticProps generates the fastest load times.
4. As the data is rendered before it reaches the client, the SEO of the page improves by leaps and bounds.

# GetServerSideProps
To understand GetServerSideProps in detail, refer to [24:08] of the video.

The salient points are listed below -

1. This method is primarily used to fetch data for every instance that a user issues a request to the page.
2. It fetches the data first before sending the page to the client. Should the client happen to issue a subsequent request, the data is fetched again.
3. Using GetServerSideProps allows you to improve your SEO as in this method the data is rendered before it reaches the client.
4. As the data is refreshed every time the user loads the page, they can view the updated information at all times.

# getStaticPaths
If a page has Dynamic Routes and uses getStaticProps, it needs to define a list of paths to be statically generated.

When you export a function called getStaticPaths (Static Site Generation) from a page that uses dynamic routes, Next.js will statically pre-render all the paths specified by getStaticPaths.

// pages/posts/[id].js

// Generates `/posts/1` and `/posts/2`

``` 
export async function getStaticPaths() {
  return {
    paths: [{ params: { id: '1' } }, { params: { id: '2' } }],
    fallback: false, // can also be true or 'blocking'
  }
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps(context) {
  return {
    // Passed to the page component as props
    props: { post: {} },
  }
}

export default function Post({ post }) {
  // Render post...
}
```
The getStaticPaths API reference covers all parameters and props that can be used with getStaticPaths.