--
-- PostgreSQL database dump
--

-- Dumped from database version 14.7 (Ubuntu 14.7-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.7 (Ubuntu 14.7-0ubuntu0.22.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: _prisma_migrations; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);


ALTER TABLE public._prisma_migrations OWNER TO postgres;

--
-- Name: clock; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.clock (
    id integer NOT NULL,
    hour integer NOT NULL,
    minute integer NOT NULL,
    angle integer NOT NULL,
    date timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public.clock OWNER TO postgres;

--
-- Name: clock_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.clock_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.clock_id_seq OWNER TO postgres;

--
-- Name: clock_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.clock_id_seq OWNED BY public.clock.id;


--
-- Name: clock id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.clock ALTER COLUMN id SET DEFAULT nextval('public.clock_id_seq'::regclass);


--
-- Data for Name: _prisma_migrations; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
bc0c0353-6182-41f8-9ae5-5df4d20bf03a	8069d3b1134bccd89a3ed6306c0526c45ad3a8c36d12b0947c79f50f3569efc4	2023-05-06 19:36:07.638842-03	20230506210038_database	\N	\N	2023-05-06 19:36:07.580932-03	1
815a995c-9a93-40fe-8200-df37bfca5a99	96b71780f4565751c3df43291de7942ddbe1d0c5f4c48ed843b616306e2f81c7	2023-05-07 20:18:32.173277-03	20230507231831_name_in_lower_case	\N	\N	2023-05-07 20:18:31.97673-03	1
\.


--
-- Data for Name: clock; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.clock (id, hour, minute, angle, date) FROM stdin;
5	11	0	30	2023-05-08 00:01:30.295
6	6	0	180	2023-05-08 00:39:22.305
7	6	30	15	2023-05-08 00:39:30.197
8	6	14	103	2023-05-08 00:39:35.719
9	8	14	163	2023-05-08 00:39:40.391
10	8	25	102	2023-05-08 00:39:43.763
11	1	25	107	2023-05-08 00:39:48.824
12	11	25	168	2023-05-08 00:39:52.567
13	11	23	157	2023-05-08 00:39:55.737
14	9	23	143	2023-05-08 00:40:03.218
15	9	40	50	2023-05-08 00:40:07.957
16	6	40	40	2023-05-08 00:40:58.817
17	6	58	139	2023-05-08 00:41:05.562
18	6	1	174	2023-05-08 00:41:10.203
19	6	7	141	2023-05-08 00:41:39.908
20	9	7	129	2023-05-08 00:41:46.946
\.


--
-- Name: clock_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.clock_id_seq', 20, true);


--
-- Name: _prisma_migrations _prisma_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);


--
-- Name: clock clock_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.clock
    ADD CONSTRAINT clock_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

