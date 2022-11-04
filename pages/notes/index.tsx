import Head from 'next/head';
import Link from 'next/link';
import { FormEvent, useState } from 'react';

import useSWR from 'swr';
import { fetchAPI, swrArgs } from '../../services/fecth';

export interface Root {
  status: string;
  data: Data;
}

export interface Data {
  notes: Note[];
}

export interface Note {
  tags: string[];
  body: string;
  id: string;
  createdAt: string;
  updatedAt: string;
}

export default function NotesPage() {
  const [inputedData, setInputedData] = useState({
    tilte: '',
    tags: ['Android', 'Web'],
    body: '',
  });
  const [loading, setLoading] = useState(false);
  const url =
    'http://ec2-13-228-28-71.ap-southeast-1.compute.amazonaws.com:5000/notes';
  const args = swrArgs(url, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });

  const { data, error, mutate } = useSWR<Root>(args, fetchAPI, {
    revalidateOnFocus: false,
  });

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      setLoading(true);
      const response = await fetchAPI(url, {
        method: 'POST',
        data: inputedData,
      });
      if (response?.status === 'success') {
        await mutate();
        setInputedData({ ...inputedData, body: '' });
      }
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      setLoading(true);
      const response = await fetchAPI(`${url}/${id}`, {
        method: 'DELETE',
        data: inputedData,
      });
      if (response?.status === 'success') {
        await mutate();
      }
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Notes</title>
        <meta
          httpEquiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        />
      </Head>
      <div className="min-h-screen w-full bg-gray-800 font-mono text-gray-50">
        <main className="mx-auto w-full px-6 py-6 lg:w-1/2">
          <div>
            <p>Add note</p>
            <form onSubmit={handleSubmit}>
              <textarea
                id="body"
                className="w-full rounded-sm p-2 text-gray-600 outline-none"
                rows={5}
                value={inputedData.body}
                onChange={(e) =>
                  setInputedData((prev) => ({ ...prev, body: e.target.value }))
                }
              ></textarea>
              <button
                disabled={loading}
                type="submit"
                className={`rounded-sm bg-green-500 px-4 py-2 disabled:bg-gray-400 ${
                  loading ? 'animate-pulse' : ''
                }`}
              >
                submit
              </button>
            </form>
          </div>
          <div>
            <p>Notes</p>
            {data?.data?.notes && (
              <div className="mt-2 grid grid-cols-2 gap-2">
                {data?.data?.notes.map((note) => (
                  <a
                    key={note.id}
                    className="block rounded-sm border p-2 duration-100 hover:translate-x-px hover:-translate-y-px"
                  >
                    <p>{note.body}</p>
                    <div className="flex gap-1">
                      {note.tags.map((tag) => (
                        <span key={tag} className="text-sm text-gray-300">
                          #{tag}
                        </span>
                      ))}
                    </div>
                    <div className="mt-1">
                      <button
                        className="rounded-sm bg-red-400 px-2 py-1 text-xs disabled:bg-gray-400"
                        disabled={loading}
                        onClick={() => handleDelete(note.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </a>
                ))}
              </div>
            )}
          </div>
        </main>
      </div>
    </>
  );
}
