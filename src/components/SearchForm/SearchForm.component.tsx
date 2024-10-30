import { SearchFormContainer } from "./SearchForm.styles";
import { z } from "zod";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

interface Props {
  onSubmit: (data: FieldValues) => void;
}

const SearchFormSchema = z
  .object({
    location: z
      .string()
      .min(3, { message: "Location is required" })
      .max(50, { message: "Location is too long" }),
    pickupDate: z.string().refine((value) => !isNaN(Date.parse(value)), {
      message: "Pickup date must be a valid date",
    }),
    returnDate: z.string().refine((value) => !isNaN(Date.parse(value)), {
      message: "Return date must be a valid date",
    }),
    pickupTime: z.string().regex(/^\d{2}:\d{2}$/, {
      message: "Pickup time must be in the format HH:MM",
    }),
    returnTime: z.string().regex(/^\d{2}:\d{2}$/, {
      message: "Return time must be in the format HH:MM",
    }),
  })
  .refine(
    (data) => {
      const pickupDateTime = new Date(`${data.pickupDate}T${data.pickupTime}`);
      const returnDateTime = new Date(`${data.returnDate}T${data.returnTime}`);
      return pickupDateTime <= returnDateTime;
    },
    {
      message: "Pick-up date and time must be before return date and time",
      path: ["returnDate"],
    }
  );

type SearchFormInputs = z.infer<typeof SearchFormSchema>;

const SearchForm = ({ onSubmit }: Props) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(SearchFormSchema),
  });

  return (
    <SearchFormContainer
      onSubmit={handleSubmit((date) => {
        onSubmit(date);
        reset();
        navigate("/rent");
      })}
    >
      <section className="container">
        <label htmlFor="location">Location</label>
        <input
          {...register("location")}
          type="text"
          id="location"
          placeholder="Riga, Latvia"
        />
        {errors.location && <p className="error">{errors.location.message}</p>}
      </section>
      <section className="container">
        <label htmlFor="pickup">Pick-up date and time</label>
        <section>
          <input {...register("pickupDate")} type="date" id="pickup" />
          <input {...register("pickupTime")} type="time" />
        </section>
        {errors.pickupDate && (
          <p className="error">{errors.pickupDate.message}</p>
        )}
        {errors.pickupTime && (
          <p className="error">{errors.pickupTime.message}</p>
        )}
      </section>
      <section className="container">
        <label htmlFor="return">Return date and time</label>
        <section>
          <input {...register("returnDate")} type="date" id="return" />
          <input {...register("returnTime")} type="time" />
        </section>
        {errors.returnDate && (
          <p className="error">{errors.returnDate.message}</p>
        )}
        {errors.returnTime && (
          <p className="error">{errors.returnTime.message}</p>
        )}
      </section>

      <button type="submit">Search</button>
    </SearchFormContainer>
  );
};

export default SearchForm;
